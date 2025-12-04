from flask import Flask , render_template
from flask_cors import CORS
from flask_migrate import Migrate
from backend.db import db
from backend.models.guild import GuildMember
from backend.routes.guild_route import guild_bp
# eventually I'm going to want to serve react directly from flask, this video here will remind me how to https://youtu.be/XwIIzOb0ooo pretty much i build the react app and direct my flask to it.

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///guild.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
migrate = Migrate(app, db)
db.init_app(app)


with app.app_context():
    db.create_all()


app.register_blueprint(guild_bp)

@app.route('/')
def hello():
    return 'Welcome to EG!'


if __name__ == '__main__':
    app.run(debug=True)