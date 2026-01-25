import os
from playwright.sync_api import sync_playwright, expect

def test_training_centers():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        file_path = os.path.abspath("training_centers.html")
        page.goto(f"file://{file_path}")

        # Wait for the content to load (since it's JS driven, it should be immediate but good to wait for element)
        page.wait_for_selector("#trainingCenters")

        # Verify that we have cards
        cards = page.locator("#trainingCenters .hover-card")
        count = cards.count()
        print(f"Found {count} training center cards.")

        # Expect at least one card
        expect(cards.first).to_be_visible()

        # Verify pagination exists
        pagination = page.locator("#pagination")
        expect(pagination).to_be_visible()

        # Take a screenshot
        page.screenshot(path="verification/after_optimization.png")

        browser.close()

if __name__ == "__main__":
    test_training_centers()
