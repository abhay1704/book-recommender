from packages import create_app
from dotenv import load_dotenv

app = create_app()

if __name__ == "__main__":
    load_dotenv()
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
