import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import "../public/assets/inputpageimage.avif"


const InputPage = () => {
  return (
    <div>
    <Head>
        <title>Saunter | Get-Started</title>
    </Head>
    <div>
    <Image src="/../public/assets/inputpageimage.avif" alt="inputpage image" layout="responsive" width="10px" height="10px"/>  
    </div>
    </div>
  );
}
 
export default InputPage;