<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Template Design - Siskoala</title>
</head>
<body>
    <ul>
        <li><a href="template-basic1/">template-basic1</a></li>
        <li><a href="template-basic2/">template-basic2</a></li>
        <li><a href="template-custom1/">template-custom1</a></li>
        <li><a href="template-custom2/">template-custom2</a></li>
    </ul>
    <?php
    if (!file_exists('template-basic1/') || !file_exists('template-basic2/') || !file_exists('template-custom1/') || !file_exists('template-custom2/') || !file_exists('template-custom3/')) {
        http_response_code(404);
        echo "<h1>404</h1>";
        echo "<p>File not found</p>";
        echo "<p>The site configured at this address does not contain the requested file.</p>";
        echo "<p>If this is your site, make sure that the filename case matches the URL as well as any file permissions.</p>";
        echo "<p>For root URLs (like <code>http://example.com/</code>) you must provide an <code>index.html</code> file.</p>";
        echo "<p><a href='https://docs.github.com/en/pages'>Read the full documentation</a> for more information about using GitHub Pages.</p>";
        echo "<p><a href='https://www.githubstatus.com/'>GitHub Status</a></p>";
    }
    ?>
</body>
</html>
