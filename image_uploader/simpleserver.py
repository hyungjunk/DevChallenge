from flask import Flask, request, make_response, send_file, g
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)
filename = None

@app.route("/", methods=["POST"])
def index():
    global filename
    files = request.files.getlist("files[]")
    for file in files:
        filename = file.filename
        print(f'filename with root : {filename}')
        file.save(secure_filename(file.filename))
    return "hello"

@app.route("/img", methods=["GET"])
def get_image():
    global filename
    print(f'filename with img: {filename}')
    return send_file(filename, mimetype='image/png')

app.run(port=8000, debug=True)