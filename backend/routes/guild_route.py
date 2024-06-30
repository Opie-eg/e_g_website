from flask import Blueprint, jsonify, request
from backend.models.guild import GuildMember

guild_bp = Blueprint('guild', __name__, url_prefix='/guild')

@guild_bp.route('/members', methods=['GET'])
def get_members():
    members = GuildMember.get_all_members()
    return jsonify([{'id': member.id, 'name': member.name, 'role': member.role , "player_class": member.player_class, "player_spec": member.player_spec, "player_main_id": member.player_main_id} for member in members])

@guild_bp.route('/members/<int:member_id>', methods=['GET'])
def get_member(member_id):
    member = GuildMember.get_member_by_id(member_id)
    if not member:
        return jsonify({'error': 'Member not found'}), 404
    return jsonify({'id': member.id, 'name': member.name, 'role': member.role , "player_class": member.player_class, "player_spec": member.player_spec, "player_main_id": member.player_main_id})

@guild_bp.route('/members', methods=['POST'])
def create_member():
    data = request.get_json()
    name = data.get('name')
    role = data.get('role')
    player_class = data.get('player_class')
    player_spec = data.get('player_spec')
    player_main_id = data.get('player_main_id')

    if not name or not role or not player_class or not player_spec:
        return jsonify({'error': 'Missing data'}), 400
    new_member = GuildMember.add_member(name, role, player_class, player_spec, player_main_id)
    return jsonify({'id': new_member.id, 'name': new_member.name, 'role': new_member.role, "player_class": new_member.player_class, "player_spec": new_member.player_spec, "player_main_id": new_member.player_main_id }), 201

@guild_bp.route('/members/<int:member_id>', methods=['PUT'])
def update_member_route(member_id):
    data = request.get_json()
    new_name = data.get('name')
    new_role = data.get('role')
    new_player_class = data.get('player_class')
    new_player_spec = data.get('player_spec')
    new_player_main_id = data.get('player_main_id')
    
    if not new_name and not new_role and not new_player_class and not new_player_spec and not new_player_main_id:
        return jsonify({'error': 'Missing data'}), 400
    
    if GuildMember.update_member(member_id, new_name=new_name, new_role=new_role, new_player_class=new_player_class, new_player_spec=new_player_spec, new_player_main_id=new_player_main_id):
        return jsonify({'message': 'Member updated successfully'}), 200
    
    return jsonify({'error': 'Member not found'}), 404


@guild_bp.route('/members/<int:member_id>', methods=['DELETE'])
def delete_member(member_id):
    if GuildMember.delete_member(member_id):
        return jsonify({'message': 'Member deleted successfully'}), 200
    return jsonify({'error': 'Member not found'}), 404
