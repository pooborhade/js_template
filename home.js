
<!-- Google tag (gtag.js) -->
<script async src="https://tagging.example.com/gtag/js?id=G-60FDXKEXRK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-60FDXKEXRK', {
     transport_url: 'https://sgtm-ahava-tagging-server.azurewebsites.net',
     first_party_collection: true,
     'send_page_view': true,
  });
gtag('event', 'page_view', {
  send_to: 'G-60FDXKEXRK'
});
</script>

<script type="text/javascript">
function js_onload_code (){
alert(" Hello, you are learning onload event in JavaScript");
}
window.onload= js_onload_code ();
</script>
