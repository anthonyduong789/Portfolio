import os
import re
import argparse
from collections import Counter

def find_css_files(directory):
    """Find all CSS files in the given directory."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.css'):
                yield os.path.join(root, file)

def extract_classes_from_file(file_path):
    """Extract CSS class names from a file."""
    class_pattern = re.compile(r'\.([a-zA-Z0-9_-]+)')
    with open(file_path, 'r') as file:
        content = file.read()
        return class_pattern.findall(content)

def main(directory):
    all_classes = []

    for css_file in find_css_files(directory):
        classes = extract_classes_from_file(css_file)
        all_classes.extend(classes)

    class_counts = Counter(all_classes)

    unique_classes = [cls for cls, count in class_counts.items() if count == 1]
    duplicate_classes = [cls for cls, count in class_counts.items() if count > 1]

    print("Unique Classes:")
    print(unique_classes)
    print("\nDuplicate Classes:")
    print(duplicate_classes)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="List unique and duplicate CSS classes in files.")
    parser.add_argument('directory', type=str, help="The directory to search for CSS files.")
    args = parser.parse_args()

    main(args.directory)
