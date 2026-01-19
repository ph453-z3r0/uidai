import pypdf

def extract_text(pdf_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for i in range(min(3, len(reader.pages))):
            text += reader.pages[i].extract_text() + "\n"
        print(text)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_text("/home/ph453/UIDAI/Solution/sample_overview_of_solution.pdf")
