import os
from playwright.sync_api import sync_playwright

def verify_employers_render():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Construct file URL
        file_path = os.path.abspath("employers.html")
        page.goto(f"file://{file_path}")

        # Verify title
        print("Verifying page title...")
        if "Employers | Seafarer Jobsite Community" not in page.title():
            print(f"Error: Page title mismatch. Got '{page.title()}'")
            exit(1)

        # Verify render of employers list
        print("Verifying employers list...")
        container = page.locator("#employersList")
        if not container.is_visible():
            print("Error: #employersList not visible")
            exit(1)

        # Check for specific content (first employer)
        first_employer = page.get_by_text("ABC Maritime Corporation")
        if not first_employer.is_visible():
            print("Error: First employer 'ABC Maritime Corporation' not found")
            exit(1)

        # Verify pagination
        print("Verifying pagination...")
        pagination = page.locator("#pagination")
        if not pagination.is_visible():
            print("Error: Pagination not visible")
            exit(1)

        # Take screenshot
        screenshot_path = "verification/after_optimization.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()
        print("Verification successful!")

if __name__ == "__main__":
    verify_employers_render()
