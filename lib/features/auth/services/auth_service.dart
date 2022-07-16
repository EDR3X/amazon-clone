import 'package:amazon_clone/models/user.dart';
import 'package:amazon_clone/utils/http_error_handler.dart';
import 'package:amazon_clone/utils/snackbar.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import '../../../constants/api.dart';

class AuthService {
  //user sign up
  Future<void> signUpUser({
    required BuildContext context,
    required String email,
    required String password,
    required String name,
  }) async {
    try {
      User user = User(
        id: '',
        name: name,
        email: email,
        address: '',
        password: password,
        type: '',
        token: '',
      );

      final http.Response response = await http.post(
        Uri.parse("$apiUrl/user/api/signup"),
        body: user.toJson(),
        headers: <String, String>{
          'Content-Type': 'application/json;charset=UTF-8'
        },
      );

      httpErrorHandler(
        response: response,
        context: context,
        onSuccess: () {
          showSnackBar(
            context,
            'Account created!',
          );
        },
      );
    } catch (e) {
      print(e.toString());
      showSnackBar(context, e.toString());
    }
  }
}
