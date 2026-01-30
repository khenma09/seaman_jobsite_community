
import os
from playwright.sync_api import sync_playwright, expect

def test_employers_list():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/employers.html")

        # Wait for the JS to populate the list
        # We expect the first employer from the JS data to be visible
        # "ABC Maritime Corporation" is the first one in the JS file
        expect(page.get_by_text("ABC Maritime Corporation")).to_be_visible()

        # Take a screenshot
        page.screenshot(path="verification/employers_baseline.png")

        print("Verification script ran successfully.")
        browser.close()

if __name__ == "__main__":
    test_employers_list()
