//blob öğrenim
        document.getElementById("buton").onchange = function(){
            document.getElementById("buton").style.marginLeft = "-10000000000px"
            //dosya
            let file = this.files[0];
            //dosya ismi
            let name = file.name
            //dosya boyutu(byte)
            let byte = file.size
            //dosya tipi
            let type = file.type
            //dosya okunmasi
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(){
                let deger = reader.result
                create1.value = deger
            }
            //elementler
            let create = document.createElement("h2")
            create.textContent = name
            create.style.textAlign = "center"
            create.style.marginTop = "-20px"
            let create1 = document.createElement("input")
            create1.type = "text"
            create1.style.marginLeft = "575px"
            create1.style.marginTop = "-10px"
            create1.id = "input"
            create1.style.width = "200px"
            let create2 = document.createElement("p")
            create2.textContent =  "dosya boyutu(byte):"+byte
            let create3 = document.createElement("button")
            create3.style.marginLeft = "615px"
            create3.style.marginTop = "-10px"
            create3.id = "buton1"
            create3.textContent = "dosyayı indir"
            create3.onclick = function(){
                if(document.getElementById("input").value == "" || document.getElementById("input1").value == ""){alert("lütfen tüm alanları doldurunuz.")}
                else{
                let blob = new Blob([document.getElementById("input").value],{type:'text/platin'})
                let url = URL.createObjectURL(blob);
                let a = document.createElement("a");
                a.href = url;
                a.download = document.getElementById("input1").value+".txt";
                a.click();
                }
            }

            let create4 = document.createElement("input")
            create4.type = "input"
            create4.style.position = "absolute"
            create4.style.marginLeft = "-710px"
            create4.style.marginTop = "-10px"
            create4.placeholder = "dosyanın adını buraya yazınız"
            create4.id = "input1"
            create4.value = name.substring(0,name.lastIndexOf("."))
            create4.style.position = "absolute"
            document.body.append(create,create1,create2,create3,create4)
            document.getElementById("input").addEventListener("input",function(){
                let enter = new TextEncoder()
            create2.textContent = "dosya boyutu(byte): "+enter.encode(document.getElementById("input").value).length
            })
        }
