from flask import Flask
helloworld = Flask(__name__)
@helloworld.route("/")
def run():
    return "<h1> Bienvenidos al servidor 1 de python </h1>"
if __name__ == "__main__":
    helloworld.run(host="0.0.0.0", port=int("5003"), debug=True)