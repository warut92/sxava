function sxaven(kiu)
{
	// konverti al la sxava
	// var certa = confirm("\u0108u vi certas ke vi volas konverti al la ลava?");
	// if (!certa) {return;}

	var teksto = document.getElementById(kiu).value;

	//grandaj
	teksto = teksto.replace(/A/,"๐จ");
	teksto = teksto.replace(/B/,"๐");
	teksto = teksto.replace(/C/g,"๐");
	teksto = teksto.replace(/D/g,"๐");
	teksto = teksto.replace(/E/g,"๐ง");
	teksto = teksto.replace(/F/g,"๐");
	teksto = teksto.replace(/G/g,"๐");
	teksto = teksto.replace(/H/g,"๐ฃ");
	teksto = teksto.replace(/I/g,"๐ฆ");
	teksto = teksto.replace(/J/g,"๐ข");
	teksto = teksto.replace(/K/g,"๐");
	teksto = teksto.replace(/L/g,"๐ค");
	teksto = teksto.replace(/M/g,"๐ซ");
	teksto = teksto.replace(/N/g,"๐ต");
	teksto = teksto.replace(/O/g,"๐ฉ");
	teksto = teksto.replace(/P/g,"๐");
	teksto = teksto.replace(/R/g,"๐ฎ");
	teksto = teksto.replace(/S/g,"๐");
	teksto = teksto.replace(/T/g,"๐");
	teksto = teksto.replace(/U/g,"๐ช");
	teksto = teksto.replace(/V/g,"๐");
	teksto = teksto.replace(/Z/g,"๐");
	//malgrandaj
	teksto = teksto.replace(/a/g,"๐จ");
	teksto = teksto.replace(/b/g,"๐");
	teksto = teksto.replace(/c/g,"๐");
	teksto = teksto.replace(/d/g,"๐");
	teksto = teksto.replace(/e/g,"๐ง");
	teksto = teksto.replace(/f/g,"๐");
	teksto = teksto.replace(/g/g,"๐");
	teksto = teksto.replace(/h/g,"๐ฃ");
	teksto = teksto.replace(/i/g,"๐ฆ");
	teksto = teksto.replace(/j/g,"๐ข");
	teksto = teksto.replace(/k/g,"๐");
	teksto = teksto.replace(/l/g,"๐ค");
	teksto = teksto.replace(/m/g,"๐ซ");
	teksto = teksto.replace(/n/g,"๐ต");
	teksto = teksto.replace(/o/g,"๐ฉ");
	teksto = teksto.replace(/p/g,"๐");
	teksto = teksto.replace(/r/g,"๐ฎ");
	teksto = teksto.replace(/s/g,"๐");
	teksto = teksto.replace(/t/g,"๐");
	teksto = teksto.replace(/u/g,"๐ช");
	teksto = teksto.replace(/v/g,"๐");
	teksto = teksto.replace(/z/g,"๐");
	//ฤapelitaj grangaj
	teksto = teksto.replace(/ฤ/g,"๐");
	teksto = teksto.replace(/ฤ/g,"๐ก");
	teksto = teksto.replace(/ฤค/g,"๐");
	teksto = teksto.replace(/ฤด/g,"๐?");
	teksto = teksto.replace(/ล/g,"๐");
	teksto = teksto.replace(/ลฌ/g,"๐");
	//ฤapelitaj malgrangaj
	teksto = teksto.replace(/ฤ/g,"๐");
	teksto = teksto.replace(/ฤ/g,"๐ก");
	teksto = teksto.replace(/ฤฅ/g,"๐");
	teksto = teksto.replace(/ฤต/g,"๐?");
	teksto = teksto.replace(/ล/g,"๐");
	teksto = teksto.replace(/ลญ/g,"๐");

	document.getElementById(kiu).value=teksto;

}


function espen(kiu)
{
	// konverti al la sxava
	// var certa = confirm("\u0108u vi certas ke vi volas konverti al la ลava?");
	// if (!certa) {return;}

	var teksto = document.getElementById(kiu).value;

	teksto = teksto.replace(/๐จ/g,"a");
	teksto = teksto.replace(/๐/g,"b");
	teksto = teksto.replace(/๐/g,"c");
	teksto = teksto.replace(/๐/g,"ฤ");
	teksto = teksto.replace(/๐/g,"d");
	teksto = teksto.replace(/๐ง/g,"e");
	teksto = teksto.replace(/๐/g,"f");
	teksto = teksto.replace(/๐/g,"g");
	teksto = teksto.replace(/๐ก/g,"ฤ");
	teksto = teksto.replace(/๐ฃ/g,"h");
	teksto = teksto.replace(/๐/g,"ฤฅ");
	teksto = teksto.replace(/๐ฆ/g,"i");
	teksto = teksto.replace(/๐ข/g,"j");
	teksto = teksto.replace(/๐?/g,"ฤต");
	teksto = teksto.replace(/๐/g,"k");
	teksto = teksto.replace(/๐ค/g,"l");
	teksto = teksto.replace(/๐ซ/g,"m");
	teksto = teksto.replace(/๐ต/g,"n");
	teksto = teksto.replace(/๐ฉ/g,"o");
	teksto = teksto.replace(/๐/g,"p");
	teksto = teksto.replace(/๐ฎ/g,"r");
	teksto = teksto.replace(/๐/g,"s");
	teksto = teksto.replace(/๐/g,"ล");
	teksto = teksto.replace(/๐/g,"t");
	teksto = teksto.replace(/๐ช/g,"u");
	teksto = teksto.replace(/๐/g,"ลญ");
	teksto = teksto.replace(/๐/g,"v");
	teksto = teksto.replace(/๐/g,"z");

	document.getElementById(kiu).value=teksto;
}
