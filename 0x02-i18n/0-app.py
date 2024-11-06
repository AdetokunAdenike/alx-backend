#!/usr/bin/env python3
"""
Basic Flask app that renders a "Welcome" page.
"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index() -> str:
    """
    Renders the index.html page with "Hello world" header.
    """

    return render_template('0-index.html')


if __name__ == '__main__':
    app.run(debug=True)
