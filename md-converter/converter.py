import os
import frontmatter
import markdown
import re 

def fix_latex(text):
    lines = text.split('\n')
    parsed_lines = []
    for line in lines:
        if line.startswith('<p>$$') and line.endswith('$$</p>'):
            parsed_lines.append(line)
        else:
            parsed_lines.append(line.replace('$$', '$'))
    return '\n'.join(parsed_lines)

def convert_md_to_html(md_file, template_file):
    # Read the markdown file
    with open(md_file, 'r', encoding='utf-8') as f:
        post = frontmatter.load(f)

    # Read the template file
    with open(template_file, 'r', encoding='utf-8') as f:
        template = f.read()

    # Replace placeholders in the template
    title = post.metadata['title']
    date = post.metadata['date']
    content = markdown.markdown(post.content, extensions=['markdown.extensions.extra'])

    content = fix_latex(content)
    content = content.replace('<em>', '*')
    content = content.replace('</em>', '*')

    content = re.sub(r'<p>(\s*<img [^>]*>\s*)</p>', r'<div class="img-container">\1</div>', content)

    katex_code = ''
    if post.metadata.get('katex', False):
        katex_code = '''<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous">

    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>

    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" integrity="sha384-43gviWU0YVjaDtb/GhzOouOXtZMP/7XUzwPTstBeZFe/+rCMvRwr4yROQP43s0Xk" crossorigin="anonymous"
        onload="renderMathInElement(document.body);"></script>
        
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
          delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
          ]
        });
      });
    </script>
        '''

    html = template.replace('{title}', title)
    html = html.replace('{date}', post.metadata['date'].strftime('%B %-d, %Y'))
    html = html.replace('{content}', content.replace('*', '&#42;'))
    html = html.replace('{katex}', katex_code)

    # Write the HTML file
    output_file = os.path.splitext(md_file)[0] + '.html'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"Converted {md_file} to {output_file}")

# Example usage
convert_md_to_html('fundamental-theorem-of-algebra.md', 'template.html')
