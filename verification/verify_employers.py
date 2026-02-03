from playwright.sync_api import sync_playwright
import sys

def verify_employers():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8000/employers.html")

        # Wait for the list to be populated (it's JS driven)
        page.wait_for_selector("#employersList .card")

        # Count items - should be 5 by default
        items = page.locator("#employersList .card")
        count = items.count()
        print(f"Found {count} employer cards")

        if count != 5:
            print("Error: Expected 5 employer cards")
            sys.exit(1)

        # Check pagination
        pagination = page.locator("#pagination .page-item")
        page_count = pagination.count()
        print(f"Found {page_count} pagination items")

        if page_count < 1:
            print("Error: Pagination not rendered")
            sys.exit(1)

        page.screenshot(path="verification/employers_after.png")
        print("Screenshot saved to verification/employers_after.png")
        browser.close()

if __name__ == "__main__":
    verify_employers()
