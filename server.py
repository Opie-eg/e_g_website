from flask import Flask , render_template


# eventually I'm going to want to serve react directly from flask, this video here will remind me how to https://youtu.be/XwIIzOb0ooo pretty much i build the react app and direct my flask to it.

app = Flask(__name__)

@app.route('/')

def hello():
    return 'Hello, Flask!'



if __name__ == '__main__':
    app.run(debug=True)