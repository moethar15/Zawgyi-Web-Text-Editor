var font={};function changeFont(obj,fonttype,_events ){var txt='';if(_id(obj.id+'Text'))txt=trim(_id(obj.id+'Text').value);if(fonttype)obj.value=fonttype;font[obj.id]={};font[obj.id].fontname=obj.value;font[obj.id].name=obj.value.replace("-","_").replace(" ","_");_id(obj.id+"Area").innerHTML='<textarea value="'+ obj.value +'" id="'+ obj.id +'Text" cols="50" rows="20" style="font-family:'+ obj.value +';font-size: '+(_f[font[obj.id].name]?_f[font[obj.id].name].fontsize:12)+'pt;width:400px;height:250px" '+(_events?_events:'')+' ></textarea>';_id(obj.id+'Text').value=txt;}function getFontList(id){var ret='<select name="Choose Font" id="'+id+'" onchange="return changeFont(this);"><option value="Arial" selected>-</option>';for(var item in _f){if(_f[item]['inuse'])ret+='<option value="'+_f[item]['fontname']+'">'+_f[item]['fontname']+" "+_f[item]['desc']+'<\/option>'}ret+='</select>';return ret;};loaded.int=true;