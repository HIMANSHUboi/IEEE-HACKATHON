from flask import Flask, request, jsonify

app = Flask(_name_)
users = {
    "testuser": "password123",
    "exampleuser": "mypassword"
}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users and users[username] == password:
        return jsonify({'user': username, 'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

if _name_ == '_main_':
    app.run(debug=True)