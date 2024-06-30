from backend.db import db

class GuildMember(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    player_class = db.Column(db.String(50), nullable=False)
    player_spec = db.Column(db.String(50), nullable=False)
    player_main_id = db.Column(db.Integer, nullable=True) #if this is null then that player is a main

#I want to get this from armory not be an input
#race
#ilvl
#tier sets  
#gear -> probably another table for this 

    def __repr__(self):
        return f'<GuildMember {self.name}>'
    
    @classmethod
    def add_member(cls, name, role, player_class ,player_spec, player_main_id = None):
        new_member = cls(name=name, role=role, player_class=player_class, player_spec=player_spec, player_main_id=player_main_id)
        db.session.add(new_member)
        db.session.commit()
        return new_member

    @classmethod
    def get_all_members(cls):
        return cls.query.all()

    @classmethod
    def get_member_by_id(cls, member_id):
        return cls.query.get(member_id)

    @classmethod
    def update_member(cls, member_id, new_name=None, new_role=None, new_player_class=None, new_player_spec=None, new_player_main_id=None):
        member = cls.query.get(member_id)
        if member:
            if new_name:
                member.name = new_name
            if new_role:
                member.role = new_role
            if new_player_class:
                member.player_class = new_player_class
            if new_player_spec:
                member.player_spec = new_player_spec
            if new_player_main_id:
                member.player_main_id = new_player_main_id
            db.session.commit()
            return True
        return False

    @classmethod
    def delete_member(cls, member_id):
        member = cls.query.get(member_id)
        if member:
            db.session.delete(member)
            db.session.commit()
            return True
        return False