from playwright.sync_api import sync_playwright, expect
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the page
        file_path = os.path.abspath("training_centers.html")
        print(f"Loading page: file://{file_path}")
        page.goto(f"file://{file_path}")

        # Check if the page loaded
        expect(page).to_have_title("Training Centers | Seafarer Jobsite Community")

        # Check if training centers are displayed
        # The code adds .hover-card class to the cards
        # We wait for the first one to appear
        cards = page.locator("#trainingCenters .hover-card")
        expect(cards.first).to_be_visible()

        # Check that we have at least 1 card (default is 5 entries)
        # Note: count() is synchronous and returns immediately, but since we waited for .first, we should have items.
        count = cards.count()
        print(f"Found {count} training centers.")
        assert count > 0, "No training centers found"

        # Check for pagination
        pagination = page.locator("#pagination")
        expect(pagination).to_be_visible()

        # Check if pagination has items
        page_items = pagination.locator("li.page-item")
        expect(page_items.first).to_be_visible()
        print(f"Found {page_items.count()} pagination items.")

        # Take a screenshot
        page.screenshot(path="verification/pagination_baseline.png")
        print("Screenshot saved to verification/pagination_baseline.png")

        browser.close()

if __name__ == "__main__":
    run()
