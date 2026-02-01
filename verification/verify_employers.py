from playwright.sync_api import sync_playwright
import os

def verify_employers():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        file_path = os.path.abspath("employers.html")
        page.goto(f"file://{file_path}")

        # Wait for the employers list to be populated
        page.wait_for_selector("#employersList .card")

        # Check if we have cards
        cards = page.locator("#employersList .card")
        count = cards.count()
        print(f"Found {count} employer cards.")

        if count == 0:
            print("Error: No employer cards found!")
            browser.close()
            exit(1)

        # Check pagination
        page.wait_for_selector("#pagination .page-item")
        pages = page.locator("#pagination .page-item")
        print(f"Found {pages.count()} pagination items.")

        # Screenshot
        page.screenshot(path="verification/employers_rendered.png", full_page=True)
        print("Screenshot saved to verification/employers_rendered.png")

        browser.close()

if __name__ == "__main__":
    verify_employers()
