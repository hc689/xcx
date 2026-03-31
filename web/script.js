// 页面导航功能
function navigateTo(pageId) {
    // 隐藏所有页面
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 更新底部导航
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // 特殊处理首页
    if (pageId === 'home') {
        document.querySelector('.tab-item:first-child').classList.add('active');
    } else if (pageId === 'work-detail') {
        // 详情页不更新底部导航
    } else {
        const tabIndex = ['create', 'show', 'interact', 'profile'].indexOf(pageId);
        if (tabIndex !== -1) {
            tabItems[tabIndex + 1].classList.add('active');
        }
    }
}

// 音乐风格选择
function selectStyle(style) {
    const styleButtons = document.querySelectorAll('[data-style]');
    styleButtons.forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

// 生成音乐
function generateMusic() {
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.textContent = '生成中...';
    generateBtn.disabled = true;
    
    // 模拟生成过程
    setTimeout(() => {
        generateBtn.textContent = '生成音乐';
        generateBtn.disabled = false;
        
        const result = document.getElementById('result');
        result.innerHTML = `
            <h3>音乐生成成功</h3>
            <audio controls src="../assets/audio/广西壮族自治区歌舞团 - 壮乡春早 (马骨胡)_L.ogg"></audio>
            <div style="margin-top: 10px;">
                <button onclick="editMusic()">编辑</button>
                <button onclick="saveMusic()">保存</button>
                <button onclick="shareMusic()">分享</button>
            </div>
        `;
        result.classList.add('active');
        
        // 显示提示
        alert('音乐生成成功！');
    }, 2000);
}

// 编辑音乐
function editMusic() {
    alert('编辑功能开发中');
}

// 保存音乐
function saveMusic() {
    alert('音乐保存成功');
}

// 分享音乐
function shareMusic() {
    alert('分享功能开发中');
}

// 选择分类
function selectCategory(category) {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
    console.log('选择分类:', category);
}

// 发布评论
function postComment() {
    const textarea = event.target.previousElementSibling;
    const commentText = textarea.value.trim();
    
    if (commentText) {
        // 模拟发布评论
        alert('评论发布成功');
        textarea.value = '';
        
        // 更新评论列表
        const commentsList = event.target.closest('.page').querySelector('.comments-list');
        if (commentsList) {
            const newComment = document.createElement('div');
            newComment.className = 'comment-item';
            newComment.innerHTML = `
                <p class="comment-author">我</p>
                <p class="comment-content">${commentText}</p>
            `;
            commentsList.appendChild(newComment);
        }
    } else {
        alert('请输入评论内容');
    }
}

// 点赞功能
function likeWork() {
    alert('点赞成功');
}

// 收藏功能
function collectWork() {
    alert('收藏成功');
}

// 分享功能
function shareWork() {
    alert('分享成功');
}

// 页面加载完成后初始化
window.onload = function() {
    // 绑定音乐风格选择事件
    const styleButtons = document.querySelectorAll('[data-style]');
    styleButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectStyle(this.dataset.style);
        });
    });
    
    // 绑定分类选择事件
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectCategory(this.dataset.category);
        });
    });
    
    // 初始化显示首页
    navigateTo('home');
};