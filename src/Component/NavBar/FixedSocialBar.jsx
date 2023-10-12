const FixedSocialBar = () => {
  return (
    <div className="sm:hidden fixed bottom-[20%] right-0 py-2 w-10 bg-stone-300 rounded-l-lg flex flex-col space-y-3 justify-center items-center z-50">
      <button>
        <img className="w-4 " src="/svg/mobile.svg" alt="instagram-logo" />
      </button>
      <button>
        <img className="w-4 " src="/svg/instagram.svg" alt="instagram-logo" />
      </button>
      <button>
        <img className="w-4 " src="/svg/facebook.svg" alt="instagram-logo" />
      </button>
      <button>
        <img className="w-4 " src="/svg/whatsapp.svg" alt="instagram-logo" />
      </button>
    </div>
  );
};

export default FixedSocialBar;
