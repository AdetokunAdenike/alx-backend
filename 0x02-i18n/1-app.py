#!/usr/bin/env python3
"""
Flask app with Babel for intenationalisation.
"""


from flask import Flask, ender_template
from flask_babel import Babel

class Config:
    """
    Config class to set available languages, default locale, and timeszone.
    """

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"

app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@app.route('/')
def index() -> str:
    """
    Route that renders the index page.
    Returns:
        str: Rendered HTML template for the index page.
    """

    return render_template('1-index.html')

if __name__ == '__main__':
    app.run(debug=True)
