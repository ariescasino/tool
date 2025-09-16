from bs4 import BeautifulSoup

def extract_text(html_content):
    """
    Extracts text from the title, H1-H6 headings, and all text-containing HTML tags.
    
    Args:
        html_content (str): The HTML content to scan.
        
    Returns:
        dict: A dictionary containing the extracted texts.
    """
    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract title
    title = soup.title.string if soup.title else ''

    # Extract headings
    headings = {f'H{i}': soup.find_all(f'h{i}') for i in range(1, 7)}
    heading_texts = {key: [heading.get_text() for heading in value] for key, value in headings.items()}

    # Extract texts from all other HTML tags
    text_tags = ['p', 'div', 'span', 'li', 'a']  # Add more tags as needed
    text_contents = {tag: [element.get_text() for element in soup.find_all(tag)] for tag in text_tags}

    return {
        'title': title,
        'headings': heading_texts,
        'text_contents': text_contents
    }

# Example usage
if __name__ == "__main__":
    html_content = "<html><head><title>Sample Title</title></head><body><h1>Heading 1</h1><p>This is a paragraph.</p></body></html>"
    extracted_text = extract_text(html_content)
    print(extracted_text)