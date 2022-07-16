import 'dart:convert';

class User {
  final String id;
  final String name;
  final String email;
  final String address;
  final String password;
  final String type;
  final String token;
  User({
    required this.id,
    required this.name,
    required this.email,
    required this.address,
    required this.password,
    required this.type,
    required this.token,
  });

  Map<String, dynamic> toMap() {
    final result = <String, dynamic>{
      'id': id,
      'name': name,
      'email': email,
      'address': address,
      'password': password,
      'type': type,
      'token': token,
    };

    return result;
  }

  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['_id'] ?? '',
      name: map['name'] ?? '',
      email: map['email'] ?? '',
      address: map['address'] ?? '',
      password: map['password'] ?? '',
      type: map['type'] ?? '',
      token: map['token'] ?? '',
    );
  }

  String toJson() => json.encode(toMap());

  factory User.fromJson(String source) => User.fromMap(json.decode(source));
}
