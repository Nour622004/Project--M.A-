import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(const AzkarApp());
}

class AzkarApp extends StatelessWidget {
  const AzkarApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'اذكار الصباح والمساء',
      theme: ThemeData(
        primarySwatch: Colors.teal,
        useMaterial3: true,
      ),
      // Hide the debug banner in the top right
      debugShowCheckedModeBanner: false,
      home: const AzkarWebView(),
    );
  }
}

class AzkarWebView extends StatefulWidget {
  const AzkarWebView({super.key});

  @override
  State<AzkarWebView> createState() => _AzkarWebViewState();
}

class _AzkarWebViewState extends State<AzkarWebView> {
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();
    
    // Initialize the WebViewController
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0xFFFFFFFF)) // Default to white, will be overridden by your CSS theme
      // Load the index.html from the local Flutter assets
      ..loadFlutterAsset('assets/web/index.html');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        // The WebViewWidget will securely display your HTML/CSS/JS inside the app
        child: WebViewWidget(controller: _controller),
      ),
    );
  }
}
