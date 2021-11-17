from flask import Flask, render_template, url_for, request, session
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)

app.config['SECRET_KEY'] = "bergamasque17112021"


@app.route('/', methods=["GET", "POST"])
def index():
    return render_template("home.html")


if __name__ == "__main__":
    app.run(debug='True')
