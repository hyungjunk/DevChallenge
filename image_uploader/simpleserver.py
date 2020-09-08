from flask import Flask, request, make_response
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET", "POST"])
def index():
    # print(request.files)
    files = request.files.getlist("files[]")
    for file in files:
        file.save(secure_filename(file.filename))
    return "hello"

app.run(port=8000, debug=True)