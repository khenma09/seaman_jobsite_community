import os
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        cwd = os.getcwd()
        url = f"file://{cwd}/training_centers.html"
        print(f"Loading {url}...")
        page.goto(url)

        # Verify title
        expect(page).to_have_title("Training Centers | Seafarer Jobsite Community")

        # Verify training centers container
        container = page.locator("#trainingCenters")
        expect(container).to_be_visible()

        # Check number of cards (default is 5)
        cards = container.locator(".col-md-4")
        print("Checking card count...")
        expect(cards).to_have_count(5)

        # Verify content of first card
        first_card = cards.first
        print("Checking first card content...")
        expect(first_card).to_contain_text("Marine Academy of the Philippines")
        expect(first_card).to_contain_text("Manila, Philippines")

        # Verify pagination
        pagination = page.locator("#pagination")
        expect(pagination).to_be_visible()

        # Check pagination links (should be more than 0)
        page_links = pagination.locator(".page-item")
        # Total items is 6 (from JS file), entries per page 5. So 2 pages.
        print("Checking pagination count...")
        expect(page_links).to_have_count(2)

        # Take screenshot
        screenshot_path = "verification/pagination_optimized.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()
        print("Verification successful!")

if __name__ == "__main__":
    run()
