
from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load employers.html directly
        # Use absolute path
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/employers.html")

        # Wait for the list to render
        page.wait_for_selector("#employersList")

        # Take a screenshot of the employers list
        page.screenshot(path="verification/employers_list.png")

        # Also check pagination
        page.screenshot(path="verification/pagination.png", clip={"x": 0, "y": 0, "width": 1000, "height": 1000})

        # Load training_centers.html directly
        page.goto(f"file://{cwd}/training_centers.html")
        page.wait_for_selector("#trainingCenters")
        page.screenshot(path="verification/training_centers.png")

        browser.close()

if __name__ == "__main__":
    run()
