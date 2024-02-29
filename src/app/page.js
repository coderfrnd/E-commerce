import Desktop from "./Component/Header/Desktop";
import Mobile from "./Component/Header/Mobile";
Desktop


export default function Home() {
  return (
   <div className="w-full h-screen">
    <div className='h-full border-2 border-black'>
      <Desktop />
      <Mobile/>
    </div>
   
   
   </div>
  );
}
