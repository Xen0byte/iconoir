import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Expand extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Expand({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9L4 4M4 4V8M4 4H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9L20 4M20 4V8M20 4H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15L4 20M4 20V16M4 20H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15L20 20M20 20V16M20 20H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}