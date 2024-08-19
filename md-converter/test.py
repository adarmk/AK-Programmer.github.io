
text = "<p>$$g'(x)f(g(x))$$</p>\n<p>$$g'(x)f(g(x))$$</p>\n<p>$$g'(x)f(g(x))$$ </p>"

def parse_text(text):
    lines = text.split('\n')
    parsed_lines = []
    for line in lines:
        if line.startswith('<p>$$') and line.endswith('$$</p>'):
            parsed_lines.append(line)
        else:
            parsed_lines.append(line.replace('$$', '$'))
    return '\n'.join(parsed_lines)

print(parse_text(text))
