document.getElementById("abler").onclick = 
function(e)
{
	chrome.storage.local.set({isActive: e.currentTarget.checked});
}
chrome.storage.local.get(['isActive'], function(result) {
  document.getElementById("abler").checked = result.isActive;
});
