import React from 'react'
import { nikeShoes } from '@/constants'
const IconiCollection = () => {
  return (
       <section className="py-20 px-6 md:px-12 lg:px-24 max-container">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-5xl md:text-6xl font-black text-center mb-16"
          >
            Iconic Collection
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {nikeShoes.map((shoe, index) => (
              <div 
                key={shoe.id}
                className="group relative bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-500 transform hover:scale-105"
                // style={{
                //   transform: `translateY(${Math.max(-30, -scrollY * 0.02 + 50 + index * 10)}px)`,
                //   opacity: Math.min(1, Math.max(0, (scrollY - 1000 - index * 100) / 300)),
                // }}
              >
                <div className="aspect-square bg-gradient-to-br from-white to-gray-100 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Shoe Image</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{shoe.name}</h3>
                <p className="text-xl font-semibold text-gray-300 mb-4">{shoe.price}</p>
                <button className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 transform group-hover:scale-105">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default IconiCollection
