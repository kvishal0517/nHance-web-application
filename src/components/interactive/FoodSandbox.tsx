import { useState } from 'react';
import { 
  UtensilsCrossed, 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle, 
  ChevronRight, 
  Flame, 
  Coffee, 
  Award,
  ChevronDown
} from 'lucide-react';

interface FoodSandboxProps {
  projectName: string;
}

export function FoodSandbox({ projectName }: FoodSandboxProps) {
  const isCopperHandi = projectName.toLowerCase().includes('copper');

  // Copper Handi State
  const [guests, setGuests] = useState<number>(2);
  const [bookingDate, setBookingDate] = useState<string>('');
  const [bookingTime, setBookingTime] = useState<string>('');
  const [diningRoom, setDiningRoom] = useState<'courtyard' | 'vaults' | 'darbar'>('courtyard');
  const [dietNote, setDietNote] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Chef Arvind State
  const [dietStyle, setDietStyle] = useState<'standard' | 'keto' | 'vegan'>('standard');
  const [flavorProfile, setFlavorProfile] = useState<'smoky' | 'zesty' | 'spicy' | 'umami'>('umami');
  const [premiumIngred, setPremiumIngred] = useState<string>('Saffron Extracts');
  const [menuAssembled, setMenuAssembled] = useState(false);

  // Chef Arvind Dynamic Menu Database
  const menus = {
    standard: {
      umami: {
        amuse: 'Wood-fired Portobello Tartlet with Saffron Foam',
        appetizer: 'Twice-cooked Lamb Ribs glazed with Wild Forest Honey',
        cleanser: 'Lime & Mint Sorbet infused with Green Cardamom',
        entrée: 'Slow-braised Nilgiri Goat Curry with Truffle Butter Naan',
        dessert: 'Smoked Chocolate Mousse with Himalayan Salt Caramel'
      },
      smoky: {
        amuse: 'Charcoal-infused Paneer Spitted Tikka',
        appetizer: 'Smoked Tandoori Chicken skewers with Mint Coulis',
        cleanser: 'Spiced Tamarind Granita',
        entrée: 'Smoky Butter Chicken with Aged Basmati Rice',
        dessert: 'Baked Gulab Jamun with Smoked Cardamom Rabri'
      },
      zesty: {
        amuse: 'Pickled Cucumber Rolls with Lemon Grass Foam',
        appetizer: 'Crispy Soft-shell Prawns with Kokum & Cilantro Drizzle',
        cleanser: 'Lemon-Verbena Ice',
        entrée: 'Malabar Moilee with Lemon-infused Basmati Pulao',
        dessert: 'Zesty Mango Kulfi with Berry compote'
      },
      spicy: {
        amuse: 'Spiced Potato and Lentil croquette',
        appetizer: 'Fiery Rajasthani Sooley Seekh Kebab',
        cleanser: 'Chilled Sweet Yogurt Shot',
        entrée: 'Spicy Laal Maas with Mathania Chilli reduction',
        dessert: 'Dark Chocolate Chilli Ganache Tart'
      }
    },
    keto: {
      umami: {
        amuse: 'Avocado and Goat Cheese bite with Flax seed crisp',
        appetizer: 'Truffle-rubbed Pork Belly cubes with Fennel salad',
        cleanser: 'Cucumber-Mint sugar-free Slush',
        entrée: 'Almond-crusted Pan-fried Sea Bass in Butter emulsion',
        dessert: 'Keto Avocado Fudge with Roasted Almond shavings'
      },
      smoky: {
        amuse: 'Smoked Salmon Rolls with Cream Cheese',
        appetizer: 'Clay-oven Charred Broccoli with Malai marination',
        cleanser: 'Ginger Lemongrass infusion',
        entrée: 'Smoked Lamb Chops with Cauliflower Mash',
        dessert: 'Warm Keto Chocolate Lava Cup'
      },
      zesty: {
        amuse: 'Citrus Zest Paneer skewers',
        appetizer: 'Lemon-Pepper Chicken wings cooked in Ghee',
        cleanser: 'Tangy Hibiscus Tea shot',
        entrée: 'Keto Malabar Fish Curry with Coconut cream',
        dessert: 'Zesty Lime Cheese Mousse (Stevia-sweetened)'
      },
      spicy: {
        amuse: 'Spicy Deviled Eggs with Paprika',
        appetizer: 'Fiery Andhra Chicken Tikka',
        cleanser: 'Chilled Buttermilk with Mint & Cumin',
        entrée: 'Keto Mutton Seekh Kebabs with spicy Spinach gravy',
        dessert: 'Spiced Cinnamon Almond flour Cake slice'
      }
    },
    vegan: {
      umami: {
        amuse: 'Crispy Tofu cube with Soy-Ginger glaze & Sesame',
        appetizer: 'Mushroom Galouti Kebab on Oats Blini',
        cleanser: 'Sour Cherry Granita',
        entrée: 'Jackfruit Kofta Curry in Cashew-Coconut milk base',
        dessert: 'Vegan Coconut Panna Cotta with Saffron syrup'
      },
      smoky: {
        amuse: 'Smoked Eggplant Bharta on Melba toast',
        appetizer: 'Charred Sweet Potato wedges with Vegan Mayo',
        cleanser: 'Chilled Pineapple-Mint shot',
        entrée: 'Wood-fired Jackfruit Tikka Masala with Roti',
        dessert: 'Smoked Coconut Sugar Pudding'
      },
      zesty: {
        amuse: 'Tangy Tamarind Glazed Beetroot bite',
        appetizer: 'Crispy Cauliflower florets in Zesty Lemongrass sauce',
        cleanser: 'Lemon-Grapefruit Sorbet',
        entrée: 'Kerala Vegetable Moilee with Coconut Rice',
        dessert: 'Lemon-Coconut Semolina slice'
      },
      spicy: {
        amuse: 'Spicy Roasted Chickpea cup',
        appetizer: 'Fiery Chilli Mushroom skewers',
        cleanser: 'Spiced Cumin Mint Water',
        entrée: 'Spicy Chettinad Vegetable Korma with Appams',
        dessert: 'Dark Chocolate Beetroot Brownie with Chilli kick'
      }
    }
  };

  const getActiveMenu = () => {
    const diet = menus[dietStyle];
    return diet[flavorProfile as keyof typeof diet] || diet.umami;
  };

  return (
    <div className="font-sans text-apple-black bg-white rounded-3xl p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      {isCopperHandi ? (
        <div>
          {/* The Copper Handi - Table booking & environment selector */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
              <UtensilsCrossed size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Table Booking & Hall Selector</h3>
              <p className="text-xs text-apple-darkGray font-medium">Select dynamic dining rooms, reserve tables, and customize dietary options.</p>
            </div>
          </div>

          {!bookingSuccess ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Form Side */}
              <div className="md:col-span-7 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Guest Size</label>
                    <div className="flex items-center bg-apple-gray rounded-xl px-3.5 py-2.5">
                      <input
                        type="number"
                        min="1"
                        max="14"
                        value={guests}
                        onChange={(e) => setGuests(Math.max(1, Number(e.target.value)))}
                        className="w-full bg-transparent text-xs font-bold focus:outline-none text-apple-black"
                      />
                      <span className="text-[10px] font-black text-slate-400 ml-2">GUESTS</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Select Dining Room Environment</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'courtyard', label: 'Main Courtyard', desc: 'Classic, open air' },
                      { id: 'vaults', label: 'Heritage Vaults', desc: 'Private, intimate' },
                      { id: 'darbar', label: 'The Darbar Room', desc: 'Bespoke royal' }
                    ].map(room => (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setDiningRoom(room.id as any)}
                        className={`p-3.5 rounded-xl text-left border transition-all ${
                          diningRoom === room.id
                            ? 'bg-amber-800 text-white border-amber-800 shadow-md'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <p className="text-xs font-extrabold">{room.label}</p>
                        <p className="text-[9px] opacity-60 mt-0.5 font-semibold">{room.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Select Time Slot</label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:border-amber-500"
                    >
                      <option value="">Choose a slot</option>
                      <option value="12:30 PM">Lunch: 12:30 PM</option>
                      <option value="02:00 PM">Lunch: 02:00 PM</option>
                      <option value="07:30 PM">Dinner: 07:30 PM</option>
                      <option value="09:00 PM">Dinner: 09:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Dietary Restrict / Notes</label>
                    <input
                      type="text"
                      placeholder="e.g. Vegetarian, Nut Allergy"
                      value={dietNote}
                      onChange={(e) => setDietNote(e.target.value)}
                      className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Booking Summary Column */}
              <div className="md:col-span-5 bg-[#2A1508] text-white rounded-3xl p-6 border border-amber-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A574] block mb-1">Heritage Vaults</span>
                  <h4 className="text-sm font-extrabold mb-4">Reservation Spec</h4>

                  <div className="space-y-4 text-xs font-medium text-slate-300">
                    <div className="flex justify-between items-center">
                      <span>Dining Ambiance</span>
                      <span className="text-white capitalize">{diningRoom}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cover Count</span>
                      <span className="text-white">{guests} Guests</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Dietary Priority</span>
                      <span className="text-[#D4A574]">{dietNote ? dietNote : 'None'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button
                    onClick={() => {
                      if (bookingDate && bookingTime) setBookingSuccess(true);
                    }}
                    disabled={!bookingDate || !bookingTime}
                    className="w-full py-4 bg-[#D4A574] hover:bg-amber-400 disabled:opacity-40 text-amber-950 font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Confirm Table
                    <CheckCircle size={14} />
                  </button>
                  <p className="text-[8px] text-center text-slate-400 font-semibold mt-2.5 leading-normal">
                    *Reservations held for a maximum of 15 minutes past the scheduled slot.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Success Embossed Ticket
            <div className="text-center py-8 max-w-md mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-1">Table Reserved</h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                Your dining pass for The Copper Handi has been registered.
              </p>

              <div className="bg-[#2A1508] text-white rounded-3xl p-6 shadow-2xl text-left space-y-4 border-2 border-[#D4A574]/40 relative overflow-hidden">
                {/* Visual Ticket Deco */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white" />

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#D4A574] bg-[#D4A574]/10 border border-[#D4A574]/30 px-2 py-0.5 rounded-md">Heritage Fine Dining</span>
                    <h4 className="text-lg font-bold mt-2 uppercase tracking-wide">The Copper Handi</h4>
                    <p className="text-[10px] font-bold text-slate-400">Environment: {diningRoom === 'courtyard' ? 'Main Courtyard' : diningRoom === 'vaults' ? 'Heritage Vaults' : 'The Darbar Room'}</p>
                  </div>
                  <UtensilsCrossed size={28} className="text-[#D4A574] opacity-80" />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Guests</span>
                    <span className="font-semibold text-white">{guests} Persons</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Time & Date</span>
                    <span className="font-semibold text-[#D4A574]">{bookingDate} @ {bookingTime}</span>
                  </div>
                </div>

                <div className="bg-black/40 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs font-semibold text-[#D4A574]">
                  <span className="flex items-center gap-1.5">
                    <Award size={14} className="text-[#D4A574]" />
                    Booking: CH-TBL-{Math.floor(Math.random() * 90000 + 10000)}
                  </span>
                  <span className="text-[9px] font-bold bg-[#D4A574]/15 px-2 py-0.5 rounded text-white">Confirmed</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setGuests(2);
                  setBookingDate('');
                  setBookingTime('');
                  setDietNote('');
                }}
                className="mt-6 px-8 py-3 bg-[#2A1508] text-white hover:bg-amber-900 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                New Reservation
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Chef Arvind Krishnan - Bespoke 5-course Tasting Menu Builder */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 border border-slate-200">
              <Coffee size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-apple-black">Bespoke 5-Course Tasting Menu Builder</h3>
              <p className="text-xs text-apple-darkGray font-medium">Select flavor cores, diet tracks, and watch Chef Arvind craft a custom-tailored luxury degustation menu.</p>
            </div>
          </div>

          {!menuAssembled ? (
            <div className="grid md:grid-cols-12 gap-8">
              {/* Form selections */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">1. Select Diet Base</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'standard', label: 'Traditional' },
                      { id: 'keto', label: 'Low Carb Keto' },
                      { id: 'vegan', label: 'Vegan Plant-Base' }
                    ].map(style => (
                      <button
                        key={style.id}
                        type="button"
                        onClick={() => setDietStyle(style.id as any)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                          dietStyle === style.id
                            ? 'bg-apple-black text-white border-apple-black'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">2. Desired Flavor Profile</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'umami', label: 'Rich & Umami' },
                      { id: 'smoky', label: 'Smoky Woodfire' },
                      { id: 'zesty', label: 'Citrus & Zesty' },
                      { id: 'spicy', label: 'Fiery Mathania' }
                    ].map(flav => (
                      <button
                        key={flav.id}
                        type="button"
                        onClick={() => setFlavorProfile(flav.id as any)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border text-left flex justify-between items-center ${
                          flavorProfile === flav.id
                            ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                            : 'bg-apple-gray border-transparent text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {flav.label}
                        {flavorProfile === flav.id && <Flame size={12} className="text-white" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2.5">3. Select Premium Signature Accent</label>
                  <select
                    value={premiumIngred}
                    onChange={(e) => setPremiumIngred(e.target.value)}
                    className="w-full bg-apple-gray border border-transparent rounded-xl px-3.5 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:border-amber-500 appearance-none"
                  >
                    <option>Saffron Extracts</option>
                    <option>Black Truffle Shavings</option>
                    <option>Himalayan Organic Ghee</option>
                    <option>Himalayan Pink Salt Crystals</option>
                  </select>
                </div>
              </div>

              {/* Estimate / Assemble Card */}
              <div className="md:col-span-5 bg-apple-gray rounded-3xl p-6 border border-slate-200/40 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">degustation setup</span>
                  <h4 className="text-sm font-extrabold text-apple-black mb-4">Chef Arvind Private Dining</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Custom menus are crafted dynamically by merging flavor components with local fresh ingredients, creating a bespoke degustation flow.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setMenuAssembled(true)}
                    className="w-full py-4 bg-apple-black hover:bg-amber-600 hover:text-apple-black text-white font-bold rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    Assemble 5-Course Menu
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Custom Menu Preview Card
            <div className="text-center py-6 max-w-xl mx-auto animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black text-apple-black mb-1">5-Course Tasting Menu Assembled</h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                Here is your bespoke menu card created dynamically by Chef Arvind Krishnan.
              </p>

              {(() => {
                const menu = getActiveMenu();
                return (
                  <div className="bg-[#0A0A0A] text-white rounded-3xl p-8 border border-slate-800 text-left space-y-6 max-w-md mx-auto shadow-2xl relative">
                    {/* Golden Border Accents */}
                    <div className="absolute inset-4 border border-[#D4AF37]/20 pointer-events-none rounded-xl" />
                    
                    <div className="text-center pb-4 border-b border-[#D4AF37]/10 relative">
                      <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#D4AF37] block mb-1">Curated Degustation</span>
                      <h4 className="text-xl font-bold uppercase tracking-widest">Bespoke Gastronomy</h4>
                      <p className="text-[9px] text-slate-400 font-semibold mt-1">Accent: {premiumIngred}</p>
                    </div>

                    <div className="space-y-4 pt-2 relative text-xs">
                      <div>
                        <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-0.5">I &bull; Amuse-Bouche</span>
                        <p className="font-semibold text-slate-200">{menu.amuse}</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-0.5">II &bull; Appetizer</span>
                        <p className="font-semibold text-slate-200">{menu.appetizer}</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-0.5">III &bull; Palate Cleanser</span>
                        <p className="font-semibold text-slate-200">{menu.cleanser}</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-0.5">IV &bull; Main Entrée</span>
                        <p className="font-semibold text-slate-200">{menu.entrée}</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-0.5">V &bull; Dessert</span>
                        <p className="font-semibold text-slate-200">{menu.dessert}</p>
                      </div>
                    </div>

                    <div className="text-center pt-4 border-t border-[#D4AF37]/10 relative">
                      <p className="text-[9px] text-slate-400 italic">"Food is an expression of context and craft." &bull; Chef Arvind</p>
                    </div>
                  </div>
                );
              })()}

              <button
                onClick={() => setMenuAssembled(false)}
                className="mt-8 px-8 py-3 bg-apple-black text-white hover:bg-slate-800 text-xs font-bold rounded-xl uppercase tracking-widest transition-all"
              >
                Recreate Menu
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
