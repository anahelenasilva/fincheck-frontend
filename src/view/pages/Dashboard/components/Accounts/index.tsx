import 'swiper/swiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
  const { sliderState, setSliderState, windowWidth } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div className="">
        <span className="tracking-[-0.5px] text-white block">Saldo Total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">R$ 1.000,00</strong>

          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
            onSlideChange={swiper => {
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              });
            }}
          >
            <div className="flex items-center justify-between mb-4" slot="container-start">
              <strong className="text-white tracking-[-1px] text-lg font-bold">
                Minhas contas
              </strong>

              <SliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd} />
            </div>

            <SwiperSlide>
              <AccountCard color="#ff0" name="Itaú" balance={1000.23} type="CASH" />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard color="#adf" name="XP" balance={25000} type="INVESTMENT" />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard color="#bae" name="Carteira" balance={25} type="CASH" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
