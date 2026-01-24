from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        file_path = os.path.abspath("employers.html")
        page.goto(f"file://{file_path}")

        # Verify title
        print(f"Page title: {page.title()}")
        assert "Employers" in page.title()

        # Verify employer list items
        employers = page.locator("#employersList .card")
        count = employers.count()
        print(f"Found {count} employers")
        assert count == 5  # Default is 5 per page

        # Verify first employer content
        first_employer = employers.first
        name = first_employer.locator(".card-title").text_content()
        print(f"First employer: {name}")
        assert "ABC Maritime Corporation" in name

        # Take initial screenshot
        page.screenshot(path="verification/employers_after.png")

        # Verify pagination
        print("Testing pagination...")
        next_button = page.locator("#pagination .page-link", has_text="2")
        next_button.click()

        # Wait for update (since it's sync JS, it should be immediate, but in a real app we'd wait)
        # We can check if the content changed.
        # The 6th employer (index 5 in data) should be "Elite Shipping Partners"
        # Wait, the data array in employers.js:
        # Index 0-4 (Page 1)
        # Index 5-9 (Page 2)
        # Index 5 is "Elite Shipping Partners"

        # Check first card on page 2
        first_employer_p2 = page.locator("#employersList .card").first
        name_p2 = first_employer_p2.locator(".card-title").text_content()
        print(f"First employer on page 2: {name_p2}")
        assert "Elite Shipping Partners" in name_p2

        browser.close()

if __name__ == "__main__":
    run()
