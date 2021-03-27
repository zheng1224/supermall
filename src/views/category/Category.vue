<template>

    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <div @click="divClick">hehehe</div>
        <li>详情1</li>
        <li>详情2</li>
        <li>详情3</li>
        <li>详情4</li>
        <li>详情5</li>
        <li>详情6</li>
        <li>详情7</li>
        <li>详情8</li>
        <li>详情9</li>
        <li>详情10</li>
        <li>详情11</li>
        <li>详情12</li>
        <li>详情13</li>
        <li>详情14</li>
        <li>详情15</li>
        <li>详情16</li>
        <li>详情17</li>
        <li>详情18</li>
        <li>详情19</li>
        <li>详情20</li>
        <li>详情21</li>
        <li>详情22</li>
        <li>详情23</li>
        <li>详情24</li>
        <li>详情25</li>
        <li>详情26</li>
        <li>详情27</li>
        <li>详情28</li>
        <li>详情29</li>
        <li>详情30</li>
        <li>详情31</li>
        <li>详情32</li>
        <li>详情33</li>
        <li>详情34</li>
        <li>详情35</li>
        <li>详情36</li>
        <li>详情37</li>
        <li>详情38</li>
        <li>详情39</li>
        <li>详情40</li>
        <li>详情41</li>
        <li>详情42</li>
        <li>详情43</li>
        <li>详情44</li>
        <li>详情45</li>
        <li>详情46</li>
        <li>详情47</li>
        <li>详情48</li>
        <li>详情49</li>
        <li>详情50</li>
        <li>详情51</li>
        <li>详情52</li>
        <li>详情53</li>
        <li>详情54</li>
        <li>详情55</li>
        <li>详情56</li>
        <li>详情57</li>
        <li>详情58</li>
        <li>详情59</li>
        <li>详情60</li>
        <li>详情61</li>
        <li>详情62</li>
        <li>详情63</li>
        <li>详情64</li>
        <li>详情65</li>
        <li>详情66</li>
        <li>详情67</li>
        <li>详情68</li>
        <li>详情69</li>
        <li>详情70</li>
        <li>详情71</li>
        <li>详情72</li>
        <li>详情73</li>
        <li>详情74</li>
        <li>详情75</li>
        <li>详情76</li>
        <li>详情77</li>
        <li>详情78</li>
        <li>详情79</li>
        <li>详情80</li>
        <li>详情81</li>
        <li>详情82</li>
        <li>详情83</li>
        <li>详情84</li>
        <li>详情85</li>
        <li>详情86</li>
        <li>详情87</li>
        <li>详情88</li>
        <li>详情89</li>
        <li>详情90</li>
        <li>详情91</li>
        <li>详情92</li>
        <li>详情93</li>
        <li>详情94</li>
        <li>详情95</li>
        <li>详情96</li>
        <li>详情97</li>
        <li>详情98</li>
        <li>详情99</li>
        <li>详情100</li>
      </ul>
    </div>

</template>

<script>
  import BScroll from 'better-scroll';
export default {
  name: 'Category',
  data() {
    return {
      scroll: null
    }
  },
  created() {
    // console.log(this.$refs.aaa);
    // console.log(document.querySelector('.wrapper'));
  },
  mounted() {
    // console.log(this.$refs.aaa);
    // console.log(document.querySelector('.wrapper'));
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
      click: true
    });

    this.scroll.on('scroll', (position) => {
      // console.log(position);
    });
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多');
    })
  },
  methods: {
    divClick() {
      console.log('divClick');
    }
  }
}
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background: red;
    overflow: hidden;
  }

</style>