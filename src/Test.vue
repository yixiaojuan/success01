<template>
    <div>
        <div>
            <img :src="imageURl" :class="{ imgs: isShow }" alt="示例图片">
            <div><button>v-bind绑定src属性和绑定class样式属性</button></div>
            <hr>
            <button :title="myTitle">w3</button><br>
            <div><button>通过v:bind给元素绑定title属性的值</button></div>
            <hr>
            <p :class="{ content: isShow }" v-bind="css">class绑定</p>
            <div><button>布尔型 attribute 依据 true / false 值来决定 attribute 是否应该存在于该元素上</button></div>            
            <!--{样式类名：boolean值}，如果boolean值为true，则添加样式，如果为false则不添加样式-->
        </div>
        <hr>
        <p v-if="seen">now you see me</p>
        <div><button>v-if 指令会基于表达式 seen 的值的真假来移除/插入该元素</button></div>
        <hr>
        <a v-bind:href="url">跳转绑定</a>
        <div><button>某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 v-bind 指令来响应式地更新一个 HTML attribute：</button></div>
        <hr>
        <a v-bind:[attributeName]="url">动态绑定参数</a>
        <div><button> JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数</button></div>
        <hr>
        <div style="width: 100%;"><button style="color:aqua;">响应式基础</button></div>
        <button @click="increment">
            {{ count }}
        </button>      
        <div ><button>ref() 接收参数，并将其包裹在一个带有 .value 属性的 ref 对象中返回;ref(2),将返回一个2.value的值对象</button></div>
        <hr>
        <button @click="muted">
            alert({{ arr }})
        </button><br>
        <p>{{ objs }}</p>
        <div><button>Ref有深层响应性即使改变嵌套对象或数组时，变化也会被检测到</button></div>
        <hr>
        <button @click="state.count++">
            {{ state.count }}
        </button><br>
        <p>{{ state.messages }}</p>
        <div><button>reactive()API与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性</button></div>
        <hr>
        <p>{{ ifTrue }}</p>
        <div><button>reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的</button></div>
        <hr>
        <button @click="cou++">
            {{ cou }}
        </button><br>
        <p>{{ id + 1 }}</p>
        <p>{{ name + 'wangwu' }}</p>
        <div><button>reactive 对象的属性:一个 ref 会在作为响应式对象的属性被访问或修改时自动解包当;
            ref 作为响应式数组或原生集合类型(如 Map) 中的元素被访问时，它不会被解包：
        </button></div>
        <hr>
    </div>
</template>
<script>
import { ref } from 'vue'
import { reactive } from 'vue'
export default {
    name: 'TestView',
    setup() {
        const count = ref(0)
        function increment() {
            // 在 JavaScript 中需要 .value
            count.value++
        }
        const obj = ref({
            nested: { count: 0 },
            arr: ['foot', 'bar']
        })
        function muted() {
            // obj.value.nested.count++;
            obj.value.arr.push('baz')
            alert(obj.value.arr)

        }
        const state = { count: 0, messages: 'success===proxy' }
        // reactive({count:0,messages:'success'})

        const ifTrue = (state === reactive(state));

        const cou = ref(0);
        const object = { id: ref(1), name: ref(`lisi`) };
        const { id } = object;//{id}={id:ref(1)}//id=ref(1)抽离出来的id必须和该对象中的属性（ID）保持一致
        const { name } = object;

        return {
            imageURl: 'https://copyright.bdstatic.com/vcg/creative/cc9c744cf9f7c864889c563cbdeddce6.jpg@h_1280',
            myTitle: 'Title',
            isShow: true,
            css: { class: 'content', id: 'div1' },
            seen: true,
            url: "https://www.baidu.com",
            attributeName: 'href',
            count: count,
            increment,
            muted,
            objs: obj.value.arr,
            state: reactive(state),
            ifTrue,
            cou,
            object,
            id,
            name,
        }

    }

}
</script>
<style>
.content {
    font-size: 20px;
    color: aqua
}

#div1 {
    font-weight: bold;
}

.imgs {
    width: 20px;
    height: 20px;
}
</style>