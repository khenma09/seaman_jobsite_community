
import os
from playwright.sync_api import sync_playwright, expect

def test_employers_pagination():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/employers.html")

        # Verify page 1 content
        expect(page.get_by_text("ABC Maritime Corporation")).to_be_visible()
        expect(page.get_by_text("Elite Shipping Partners")).not_to_be_visible()

        # Click page 2
        # The pagination links are 1, 2, 3... and "Next"
        # We can find the link with text "2"
        page.get_by_role("link", name="2").click()

        # Verify page 2 content
        expect(page.get_by_text("Elite Shipping Partners")).to_be_visible()
        expect(page.get_by_text("ABC Maritime Corporation")).not_to_be_visible()

        print("Pagination verification script ran successfully.")
        browser.close()

if __name__ == "__main__":
    test_employers_pagination()
