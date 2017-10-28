walk(document.body);

function walk(node)
{
	var child, next; 
	

	switch ( node.nodeType ) 
	{
		case 1:
		case 9: 
		case 11: 
			child = node.firstChild;
				while(child)
				{ 
					next = child.nextSibling;
					walk(child);
					child = next;
				}
				break;
		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	
	v = v.replace(/\bfuck\b/g, "FILTERED");
	v = v.replace(/\bfuck\b/g, "FILTERED");
	v = v.replace(/\bmotherfucker\b/g, "FILTERED");
	v = v.replace(/\bshit\b/g, "FILTERED");
	v = v.replace(/\bbitch\b/g, "FILTERED");
	v = v.replace(/\bcunt\b/g, "FILTERED");
	
	textNode.nodeValue = v;	
}
	