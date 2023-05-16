from flask import Flask
from .api.recommend import bp as recommend_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(recommend_bp)

    return app

