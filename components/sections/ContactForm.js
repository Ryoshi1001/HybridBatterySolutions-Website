export default function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true" action="/success" className='max-w-4xl mx-auto'>
      <input type="hidden" name="form-name" value="contact" />
      <div className='mb-5'>
        <label htmlFor='name' className='mb-3 block text-base font-medium text-gradient'>
          Full Name
        </label>
        <input
          type='text'
          name="name"
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          required
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='car' className='mb-3 block text-base font-medium text-gradient'>
          Year/Make/Model
        </label>
        <input
          type='text'
          name="car"
          placeholder='Hybrid vehicle information'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          required
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='number' className='mb-3 block text-base font-medium text-gradient'>
          Contact Number
        </label>
        <input
          type='tel'
          name="number"
          placeholder='Contact number'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          required
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='email' className='mb-3 block text-base font-medium text-gradient'>
          Email Address
        </label>
        <input
          type='email'
          name="email"
          placeholder='youremail@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          required
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='message' className='mb-3 block text-base font-medium text-gradient'>
          Message or Error Codes
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder='Kindly leave us your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          required
        ></textarea>
      </div>
      <div>
        <button type="submit" className='hover:shadow-form rounded-md bg-gradient hover:hover-gradient py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
}
