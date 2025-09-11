import PromotionPage from "@/components/PromotionPage";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function PromotionApp({ isOpen, setIsOpen }: Props) {
  return (
    <main className=" flex flex-col items-center justify-center ">
      <div className="w-full h-auto ">
        <h2>Moi moi</h2>
      </div>
      <PromotionPage />
    </main>
  );
}
