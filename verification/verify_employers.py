from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get absolute path to employers.html
        cwd = os.getcwd()
        file_path = f"file://{cwd}/employers.html"

        print(f"Navigating to {file_path}")
        page.goto(file_path)

        # Check if employer list exists
        container = page.locator("#employersList")
        if container.is_visible():
            print("Employers list container found.")
        else:
            print("Employers list container NOT found.")
            exit(1)

        # Count cards
        cards = container.locator(".card")
        count = cards.count()
        print(f"Initial card count: {count}")
        if count != 5:
             print(f"Error: Expected 5 cards, found {count}")

        # Take screenshot of initial state
        page.screenshot(path="verification/employers_initial.png")

        # Test pagination
        pagination = page.locator("#pagination")
        if pagination.is_visible():
            print("Pagination found.")

        # Click next page (page 2)
        # Note: In the existing code, page 2 is just the link with text "2"
        page_2_link = pagination.get_by_role("link", name="2", exact=True)
        if page_2_link.is_visible():
            print("Clicking page 2...")
            page_2_link.click()

            # Wait a bit for update (though it's synchronous in existing code, good practice)
            # In current implementation it is synchronous DOM update, so it should be immediate.

            # Count cards again (should be 5 or less depending on data)
            # employersData has > 40 items, so page 2 should have 5 items.
            count_page_2 = cards.count()
            print(f"Page 2 card count: {count_page_2}")

            # Take screenshot of page 2
            page.screenshot(path="verification/employers_page_2.png")

            # Check content of first card to ensure it changed
            first_card_title = cards.first.locator(".card-title").inner_text()
            print(f"First card on page 2: {first_card_title}")

        else:
            print("Page 2 link not found.")

        browser.close()

if __name__ == "__main__":
    run()
