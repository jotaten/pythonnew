from flask import Flask, jsonify, request, render_template

app = Flask(__name__, template_folder='template', static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api', methods=['GET'])
def home():
    return jsonify({"message": "Bienvenido a la API!"})

@app.route('/api/data', methods=['POST'])
def create_data():
    data = request.json
    return jsonify({"received": data}), 201

if __name__ == '__main__':
    app.run(debug=True)