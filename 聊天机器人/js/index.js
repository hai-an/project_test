/* $( function ()
{
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();

    // 为发送按钮绑定鼠标点击事件
    $( '#btnSend' ).on( 'click', function ()
    {
        let text = $( '#ipt' ).val().trim();
        if ( text.length <= 0 )
        {
            return $( '#ipt' ).val( '' );
        }
        // 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
        $( '#talk_list' ).append( `<li class="right_word">
<img src="img/person02.png" /> <span>${ text }</span>
</li>`)
        $( '#ipt' ).val( '' );
        // 重置滚动条的位置
        resetui();
        // 发起请求，获取聊天内容
        getMsg( text );
    } )

    // 获取聊天机器人发送回来的消息
    function getMsg ( text )
    {
        $.ajax( {
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function ( res )
            {
                console.log( '机器人res:', res );
                if ( res.message === 'success' )
                {
                    // 接收聊天消息
                    let msg = res.data.info.text
                    $( '#talk_list' ).append( `<li class="left_word">
                    <img src="img/person01.png" /> <span>${ msg }</span>
                    </li>`)
                    // 重置滚动条的位置
                    resetui();
                    // 调用 getVoice函数,把文本转化为语音
                    getVioce( msg )
                }


            },
        } )
    }


    // 把文字转化为语音进行播放
    function getVioce ( text )
    {
        $.ajax( {
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function ( res )
            {
                console.log( '语音res:', res );
                if ( res.status === 200 )
                {
                    // 播放语音
                    $( '#voice' ).attr( 'src', res.voiceUrl );
                }
            }
        } )
    }
    //为发送按钮绑定keyup事件
    $( '#ipt' ).on( 'keyup', function ( e )
    {
        if ( e.key === 'Enter' )
        {

            $( '#btnSend' ).click()
        }
    } )
} ) */
//  第二次 练习
/* $( function ()
{
    // console.log( '$', $ );
    // 初始化右侧滚动条
    // 这个方法定义在scroll
    resetui();
    // 为发送按钮绑定鼠标点击事件
    $( '#btnSend' ).on( 'click', function ()
    {
        let text = $( '#ipt' ).val().trim();
        if ( text.length <= 0 )
        {
            return $( '#ipt' ).val( '' )
        }
        // 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
        $( '.talk_list' ).append( `
        <li class="right_word">
            <img src="img/person02.png" /> <span>${ text }</span>
          </li>
        `)
        // 清空输入框
        $( '#ipt' ).val( '' );
        resetui();
        // 发送请求,获取聊天机器人发送回来的消息
        getMsg( text )
    } )
    // 获取聊天机器人发送回来的消息
    function getMsg ( text )
    {
        $.ajax( {
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },

            success: function ( res )
            {
                // console.log( res );
                if ( res.message === 'success' )
                {
                    // 接收聊天信息
                    let msg = res.data.info.text
                    $( '#talk_list' ).append( `
                    <li class="left_word">
                        <img src="img/person01.png" /> <span>${ msg }</span>
                      </li>
                    `)
                    // 重置滚动条的位置
                    resetui()
                    // 调用函数转化为语音
                    getVoice( msg )
                }
            }
        } )
    }

    // 把文字转化为语音进行播放
    function getVoice ( text )
    {
        $.ajax( {
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function ( res )
            {
                console.log( res );
                if ( res.status === 200 )
                {
                    // 博放语音
                    $( '#voice' ).attr( 'src', res.voiceUrl )
                }
            }
        } )
    }

    // 回车键发送信息
    $( '#ipt' ).on( 'keyup', function ( e )
    {
        console.log( e.keyCode );
        console.log( e.key );
        if ( e.key === 'Enter' )
        {
            console.log( '我刚才按了回车键' );
            $( '#btnSend' ).click()
        }
    } )
} );*/

/* $( function ()
{
    resetui()
    // 为发送按钮绑定鼠标点击事件
    $( '#btnSend' ).on( 'click', function ()
    {
        let text = $( '#ipt' ).val().trim()
        if ( text.length <= 0 )
        {//清空输入框空格
            return $( '#ipt' ).val( '' );
        }
        // 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
        $( '#talk_list' ).append( `
            <li class="right_word">
            <img src="img/person02.png" /> <span>${ text }</span>
          </li>
            `)
        $( '#ipt' ).val( '' );
        resetui()
        // 调用 getVoice函数 接收聊天信息
        getMsg( text )
    } )

    // 获取聊天机器人发送回来的消息
    function getMsg ( text )
    {
        $.ajax( {
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function ( res )
            {
                console.log( res );
                if ( res.message === 'success' )
                {
                    // 接收聊天信息
                    let msg = res.data.info.text
                    $( '#talk_list' ).append( `
                    <li class="left_word">
                    <img src="img/person01.png" /> <span>${ msg }</span>
                  </li>
                    `)
                    // 重置滚动条的位置
                    resetui()
                    // 调用 getVoice 函数，把文本转化为语音
                    getVoice( msg )
                }
            }
        } )
    }
    // 文字转语音
    function getVoice ( text )
    {
        $.ajax( {
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function ( res )
            {
                console.log( res );
                if ( res.status === 200 )
                {
                    // 播放语音
                    $( '#voice' ).attr( 'src', res.voiceUrl )
                }
            }
        } )
    }

    // 回车键 触发btn点击事件
    $( '#ipt' ).on( 'keyup', function ( e )
    {
        if ( e.key === 'Enter' )
        {
            $( '#btnSend' ).click()
        }
    } )
} ); */
$(function() {
	resetui();
	// 为发送按钮绑定鼠标点击事件
	$('#btnSend').on('click', function() {
		let text = $('#ipt').val().trim();
		// 如果用户只输入空格 则不发送消息 并且清空输入框的空格
		if (text.length <= 0) return $('#ipt').val('');
		// 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
		$('#talk_list').append(`
        <li class="right_word"><img src="img/person02.png" /> <span>${text}</span></li>
        `);
        //  清空输入框的内容
		$('.input_txt').val('');
		// 重置滚动条的位置
		resetui();
		getMsg(text);
	});
	// 回车键发送信息
	$('.input_txt').on('keyup', function(e) {
		if (e.keyCode == 13) {
			$('#btnSend').click();
		}
	});
	// 获取聊天机器人发送回来的消息
	function getMsg(text) {
		$.ajax({
			type: 'GET',
			url: 'http://www.liulongbin.top:3006/api/robot',
			data: {
				spoken: text
			},
			success: function(res) {
				if (res.message === 'success') {
					let msg = res.data.info.text;
					$('#talk_list').append(`
                    <li class="left_word"><img src="img/person01.png" /> <span>${msg}</span></li>
                    `);
					// 重置滚动条的位置
					resetui();
					// 调用 getVoice 函数，把文本转化为语音
					getVoice(msg);
				}
			}
		});
	}
	function getVoice(text) {
		$.ajax({
			type: 'GET',
			url: 'http://www.liulongbin.top:3006/api/synthesize',
			data: {
				text: text
			},
			success: function(res) {
				if (res.status === 200) $('#voice').attr('src', res.voiceUrl);
			}
		});
	}
});
