function makeNode(ch)
{
    this.ch = ch;
    this.isTerminal = false;
    this.map = {};      // map stores the mapping char -> new link i.e, { 'a': node, ...}
    this.words = [];    // list of words with prefix
}

function addWord(str, root)
{
    n=str.length;
    curr=root;
    for (var i=0;i<n;i++)
    {
        if (!curr.map[str[i]])  // if the char:node mapping is not present in map
            curr.map[str[i]] = new makeNode(str[i]);
        curr.words.push(str);   // push word to prefix
        curr=curr.map[str[i]];  // goto Ref node
    }
    curr.isTerminal=true;
}

function getPrefix(str, root)
{
    n=str.length;
    curr=root;
    for (var i=0;i<n;i++)
    {
        if (!curr.map[str[i]])  // key not present in node, i.e. no prefix exists, return empty list
            return [];
        else                    // move to Ref node
            curr=curr.map[str[i]];
    }
    return curr.words;          // return list of prefixes
}