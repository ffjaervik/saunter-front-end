import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "../public/assets/inputpageimage.avif";



const InputPage = () => {
  return (
   
      <div>
        <Head>
          <title>Saunter | Get-Started</title>
        </Head>
        <div>
          {/* <Image
            src="/../public/assets/inputpageimage.avif"
            alt="inputpage image"
            layout="responsive"
            width="10px"
            height="10px"
          /> */}

          <FormControl>
  <FormLabel>Country</FormLabel>
  <Select placeholder='Select Location'>
    <option>London</option>

  </Select>
  <FormLabel>Budget</FormLabel>
  <Select placeholder='Select Budget'>
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
    
  </Select>
</FormControl>
        </div>
      </div>
      
  );
};

export default InputPage;
